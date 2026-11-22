// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
import { recursosPlanejados } from './content';

afterEach(cleanup);

describe('App', () => {
  it('renderiza o título', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Data Intelligence Platform');
  });

  it('lista todos os recursos planejados', () => {
    render(<App />);
    expect(screen.getAllByRole('listitem')).toHaveLength(recursosPlanejados.length);
  });

  it('avisa que os recursos ainda não estão implementados', () => {
    render(<App />);
    expect(screen.getByRole('status').textContent).toMatch(/ainda não foram/);
  });
});
