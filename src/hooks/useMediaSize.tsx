import { useMediaQuery } from "react-responsive";

// interface MediaProps {
//   children: ReactNode;
// }

// const Mobile: React.FC<MediaProps> = ({ children }) => {
//   const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
//   return <>{isMobile && children}</>;
// };

// const Tablet: React.FC<MediaProps> = ({ children }) => {
//   const isTablet = useMediaQuery({ query: "(max-width: 1280px)" });
//   return <>{isTablet && children}</>;
// };

// export { Mobile, Tablet };

export default function useMediaSize() {
  const Tablet = useMediaQuery({ query: "(max-width: 1280px)" });
  const Mobile = useMediaQuery({ query: "(max-width: 767px)" });

  return { Tablet, Mobile };
}
