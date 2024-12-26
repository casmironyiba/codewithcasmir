
export default interface MobileNavigationInterface {
  children?:React.ReactNode;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams?:any;
  userLinks?:boolean;
  adminLinks?:boolean;
  params?:any
}
