import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const customRender = (
  ui: React.ReactElement,
  starter?: string
): RenderResult => {
  const AllTheProviders: React.FC = ({ children }) => {
    return (
      <MemoryRouter initialEntries={starter ? [starter] : undefined}>
        <QueryClientProvider client={client}>
          <ThemeProvider theme={createMuiTheme({})}>{children}</ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );
  };

  return render(ui, {
    wrapper: AllTheProviders as React.ComponentType,
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
