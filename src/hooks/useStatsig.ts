// useStatsig.ts
import { useState, useEffect } from 'react';
import Statsig from 'statsig-js';
import { getRandomPin } from '@/utils/helper';

const useStatsig = (gateName: string): boolean | null => {
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const initializeStatsig = async () => {
      await Statsig.initialize(process.env.STATSIG_CLIENT_KEY as string, {
        userID: getRandomPin(),
      });
      const isGateEnabled = await Statsig.checkGate(gateName);
      setIsEnabled(isGateEnabled);
    };

    initializeStatsig();

    return () => {
      Statsig.shutdown();
    };
  }, [gateName]);

  return isEnabled;
};

export default useStatsig;
