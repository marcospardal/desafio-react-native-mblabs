export interface NumberControlProps {
  value: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  cart?: boolean;
}