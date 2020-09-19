import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

interface WithLoadingProps {
  isLoading: boolean;
}

export const withSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const {isLoading, ...props} = this.props;
      return isLoading ? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> : <WrappedComponent {...props as P} />;
    }
  };
