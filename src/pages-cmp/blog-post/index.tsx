import type { FC } from 'react';
import { useRouter } from 'next/router';

const BlogPost: FC<{}> = () => {
  const router = useRouter();
  const { postId } = router.query;

  return <div>BlogPost - {postId}</div>;
};

export default BlogPost;
