import { QueryClientProvider } from './query-client-provider';

export type AppProvidersProps = {
  readonly children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}
