import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const REACT_APP_OAUTH_PATH =
  "https://unsplash.com/oauth/authorize?client_id=tx30kLeBRf2728bcXdJaOFqxR3Ly8Sbq_4C7mPv0njA&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections";
export const ListScreen: React.FC = () => {
  return <Link href={REACT_APP_OAUTH_PATH}>Authorize by unsplash.com</Link>;
};
