type Photo = {
    id: string;
    width: number;
    height: number;
    description: string | null;
    alt_description: string | null;
    urls: { raw: string; full: string; regular: string; small: string, thumb: string, small_s3:string };
    color: string | null;
    user: {
      id: string;
      username: string;
      name: string;
    };
}

interface PhotoListItem {
  photo: Photo;
}

interface PhotoState  {
    photos: Photo[]
}

type PhotoAction = {
    type: string
    payload: Photo[]
}
  
type DispatchType = (args: PhotoAction) => PhotoAction

interface PhotosRequest {
  type: string
}
interface PhotosError {
  type: string
}
interface PhotosSuccess {
  type: string,
  payload: PhotoState
}
type PhotosDispatchTypes = PhotosRequest | PhotosError | PhotosSuccess

interface AuthState {
  signedIn: boolean,
  userName: string,
}

interface AuthRequest {
  type: string,
  payload: object
}

interface AuthError {
  type: string
}

interface AuthSuccess {
  type: string,
}

type AuthDispatchTypes = AuthRequest | AuthError | AuthSuccess