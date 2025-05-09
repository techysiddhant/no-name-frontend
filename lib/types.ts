export type CategoryType = {
  id: number;
  name: string;
};
export type TagType = {
  id: number;
  name: string;
};

export type ResourceType = {
  id: string;
  title: string;
  resourceType: "video" | "article";
  categoryName: string;
  url: string;
  image?: string | null;
  isPublished: boolean;
  createdAt: string;
  updatedAt: Date;
  tags: string[];
  categories: CategoryType;
  description: string | null;
  upvoteCount: number;
  language: "hindi" | "english";
  hasUpvoted: boolean;
  isBookmarked: boolean;
  bookmarkCount?: number;
  categoryId: string;
  creator?: {
    name: string;
    username: string;
  };
  status: "pending" | "approved" | "rejected";
};

export type BookmarkType = {
  id: string;
  userId: string;
  resourceId: string;
  createdAt: string;
  updatedAt: string;
  resource: ResourceType;
};
