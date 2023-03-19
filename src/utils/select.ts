export const selectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&hover": {
      border: "none",
    },
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--dsc-color-font-placeholder)",
  }),
  indicatorSeparator: (baseStyles: any) => ({
    ...baseStyles,
    display: "none",
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--dsc-color-font-primary)",
  }),
};
