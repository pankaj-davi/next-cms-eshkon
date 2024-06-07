import React, { useEffect, useState } from 'react';
import { getContantData } from '@/utils/contentful';

interface UseEntryProps {
  contentType: string;
  dtoFunction: (data: any) => any;
}

export const useEntry = ({ contentType, dtoFunction }: UseEntryProps) => {
  const [entryData, setEntryData] = useState<any>(null);
  const [isError, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoadin] = useState(true);

  const fetchEntry = async () => {
    try {
      setIsLoadin(true);
      const data = await getContantData(contentType);
      const transformedData = dtoFunction(data);
      setEntryData(transformedData);
      setIsLoadin(false);
    } catch (error) {
      console.error('Error fetching entry data:', error);
      setIsLoadin(false);
      setIsError(JSON.stringify(error));
    }
  };

  useEffect(() => {
    fetchEntry();
  }, [contentType]);

  return { entryData, isError, isLoading };
};
