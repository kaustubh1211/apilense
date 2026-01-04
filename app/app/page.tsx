
import ApiLensApp from '@/components/ApiLense';
import { Toaster } from 'sonner';

export default function AppPage() {
  return (
    <>
      <Toaster position="top-right" />
      <ApiLensApp/>
    </>
  );
}