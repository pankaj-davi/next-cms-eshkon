import { useState, useEffect, useLayoutEffect } from 'react';
import Statsig from 'statsig-js';
import { getRandomPin } from '@/utils/helper';

interface IuseStatsig {
  isEnabled: boolean | null;
  isLoading: boolean;
}

const useStatsig = (gateName: string): IuseStatsig => {
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
    const initializeStatsig = async () => {
      try {
        await Statsig.initialize(process.env.STATSIG_CLIENT_KEY as string, {
          userID: getRandomPin(),
        });
        const isGateEnabled = await Statsig.checkGate(gateName);
        setIsEnabled(isGateEnabled);
      } catch (error) {
        // console.error('Failed to initialize Statsig:', error);
        setIsEnabled(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeStatsig();

    return () => {
      Statsig.shutdown();
      setIsLoading(false);
    };
  }, [gateName]);

  return { isEnabled, isLoading };
};

export default useStatsig;
