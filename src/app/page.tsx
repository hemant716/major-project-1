
import { prisma } from "@/lib/db";

const Page = async () => {
   const posts = await prisma.Post.findMany(); 
  return ( 
   <div>
     {
      JSON.stringify(posts,null,2)
     }
   </div>
   );
}
 
export default Page;
