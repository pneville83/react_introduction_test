import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('like 1 al renderizar por primera vez ', () => {
  render(<App />);
  const like = screen.getByText ("25");
  expect (like).toBeInTheDocument(); 
});

test('like 2 al renderizar por primera vez ', () => {
  render(<App />);
  const like2 = screen.getByText ("0");
  expect (like2).toBeInTheDocument(); 
});

test('like 3 al renderizar por primera vez ', () => {
  render(<App />);
  const like3 = screen.getByText ("10");
  expect (like3).toBeInTheDocument(); 
});

test ('like 1 al sumar un click  ', () => {
  const { container } = render ( <App /> );
  const button = container.querySelector ("button");
  fireEvent.click (button);

  const like = screen.getByTestId ("countLike1");
  expect (like.textContent).toBe ("26")
})

test ('like 2 al sumar un click  ', () => {
  render ( <App /> );
  const button = screen.getByTestId ("plus2");
  fireEvent.click (button);

  const like2 = screen.getByTestId ("countLike2");
  expect (like2.textContent).toBe ("1")
})

test ('like 3 al sumar 100  click  ', () => {
  render ( <App />);
  const button = screen.getByTestId ("plus3")
  for (let i=0; i < 100; i++){
    fireEvent.click (button);
  }
  const like2 = screen.getByTestId ("countLike3");
  expect (like2.textContent).toBe ("110")
})

test ('like 1 al restar 30  click  ', () => {
  render ( <App />);
  const button = screen.getByTestId ("less")
  for (let i=0; i < 35; i++){
    fireEvent.click (button);
  }
  const like = screen.getByTestId ("countLike1");
  expect (like.textContent).toBe ("0")
})
