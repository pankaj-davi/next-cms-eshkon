export const pagesDto = (data: any) => {
  return {
    navLinks: data.map(
      ({
        fields,
        sys: {
          id,
          contentType: {
            sys: { type },
          },
          updatedAt,
        },
      }: any) => ({
        ...fields,
        id,
        type,
        updatedAt,
      })
    ),
  };
};
