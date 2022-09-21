import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe ('Test para valoress inicilaes de los likes', ()=>{
  test ('Likes iniciales del contador 1', ()=>{
    render ( <App /> );
    const like1 = screen.getByText ("30");
    expect (like1).toBeInTheDocument();
  });

  test ('Likes iniciales del contador 2', ()=>{
    render ( <App /> );
    const like2 = screen.getByText ("39");
    expect (like2).toBeInTheDocument();
  });

  test ('Likes iniciales del contador 3', ()=>{
    render ( <App /> );
    const like3 = screen.getByText ("83");
    expect (like3).toBeInTheDocument();
  });
})

describe ('Prueba de suma de likes al dar click', ()=>{
  test ('Suma 1 like al contador 1', ()=>{
    render ( <App />);
    const button = screen.getByTestId ("plus1");
    fireEvent.click (button);
    const like1 = screen.getByTestId ("countLike1")
    expect (like1.textContent). toBe ("31");
  });

  test ('Suma 1 like al contador 2', ()=>{
    render ( <App />);
    const button = screen.getByTestId ("plus2");
    fireEvent.click (button);
    const like2 = screen.getByTestId ("countLike2")
    expect (like2.textContent). toBe ("40");
  });
  
  test ('Suma 1 like al contador 1', ()=>{
    render ( <App />);
    const button = screen.getByTestId ("plus3");
    fireEvent.click (button);
    const like3 = screen.getByTestId ("countLike3")
    expect (like3.textContent). toBe ("84");
  });
})