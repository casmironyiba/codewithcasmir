
export default interface IMobileNavigation {
  children?:React.ReactNode;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams?:any;
  adminLinks?:boolean;
  studentLinks?:boolean;
  instructorLinks?:boolean;
  params?:any
}
