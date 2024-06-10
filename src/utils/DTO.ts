export const DTOContant = (data: any[]) => {
  return {
    data: data.map(
      ({
        fields,
        sys: {
          id,
          contentType: {
            sys: { type },
          },
          createdAt,
        },
      }: any) => ({
        ...fields,
        id,
        type,
        createdAt,
      })
    ),
  };
};
