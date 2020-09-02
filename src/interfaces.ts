import React from "react";

export interface User {
  id: string
  displayName: string
  email: string
  createdAt: unknown
}

export interface Collection {
  id: number
  title: string
  routeName: string
  items: Item[]
}

export interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface Section {
  title: string
  imageUrl: string
  id: number
  size: string,
  linkUrl: string
}

export interface CartItem extends Item {
  quantity: number
}

export interface FormInput {
  handleChange?(event: React.ChangeEvent): void
  label?: string
  name?: string
  required?: boolean
  type: string
  value: string
}
