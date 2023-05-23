import React from "react";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

const CUma = () => {
  const tes = useSession();

  console.log(tes);
  return <div>CUma</div>;
};

export default CUma;

// export async function getServerSideProps({ req }) {
//   // Fetch data from external API
//   const session = await getSession({ req });
//   console.log("session");
//   console.log(session);
//   // Pass data to the page via props
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
