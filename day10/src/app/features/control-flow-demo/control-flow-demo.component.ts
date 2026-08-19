import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock?: boolean;
}

export interface CategoryGroup {
  id: number;
  name: string;
  products: Product[];
}

export type AppStatus = 'loading' | 'success' | 'error' | 'idle';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './control-flow-demo.component.html',
  styleUrl: './control-flow-demo.component.css',
})
export class ControlFlowDemoComponent {
  // ─── Section 1: @if ─────────────────────────────────────────────
  isLoggedIn = false;
  userName = 'Ahmed';

  // ─── Section 2: @else if (grade) ─────────────────────────────────
  grade: 'A' | 'B' | 'C' | 'F' | '' = '';

  // ─── Section 3 & 4: @for + @empty ────────────────────────────────
  private readonly initialProducts: Product[] = [
    { id: 1, name: 'Wireless Mouse', price: 250, category: 'Accessories' },
    { id: 2, name: 'Mechanical Keyboard', price: 1200, category: 'Accessories' },
    { id: 3, name: '27" Monitor', price: 4500, category: 'Displays' },
    { id: 4, name: 'USB-C Hub', price: 600, category: 'Accessories' },
  ];

  products: Product[] = [...this.initialProducts];

  // ─── Section 5: @switch ─────────────────────────────────────────
  status: AppStatus = 'idle';

  // ─── Section 6: Nested control flow ─────────────────────────────
  categories: CategoryGroup[] = [
    {
      id: 1,
      name: 'Laptops',
      products: [
        { id: 101, name: 'Ultrabook 14"', price: 22000, category: 'Laptops', inStock: true },
        { id: 102, name: 'Gaming Laptop', price: 35000, category: 'Laptops', inStock: false },
      ],
    },
    {
      id: 2,
      name: 'Phones',
      products: [
        { id: 201, name: 'Pixel Phone', price: 18000, category: 'Phones', inStock: true },
        { id: 202, name: 'Budget Phone', price: 7000, category: 'Phones', inStock: true },
      ],
    },
    {
      id: 3,
      name: 'Audio',
      products: [
        { id: 301, name: 'Noise Cancelling Headphones', price: 5000, category: 'Audio', inStock: false },
      ],
    },
  ];

  // ─── Methods ────────────────────────────────────────────────────
  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  setGrade(value: 'A' | 'B' | 'C' | 'F'): void {
    this.grade = value;
  }

  clearGrade(): void {
    this.grade = '';
  }

  clearProducts(): void {
    this.products = [];
  }

  resetProducts(): void {
    this.products = [...this.initialProducts];
  }

  setStatus(value: AppStatus): void {
    this.status = value;
  }
}
