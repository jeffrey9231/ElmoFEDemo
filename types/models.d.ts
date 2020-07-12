/** UserAccountMVC model definitions **/
declare interface UserAccountDetails {
  id: string;
  name: string;
  screen_name?: string;
  profile_image_url?: string;
  followers_count?: number;
}

declare interface SearchQuery {
  searchQuery: string;
}

declare type UsersStoreState = UserAccountDetails[];
