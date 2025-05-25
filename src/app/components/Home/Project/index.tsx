"use client";
import { useRouter } from "next/navigation";
import ProjectSlide from "./slide";
const Project = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/projects");
  };

  return (
    <>
      <ProjectSlide />
    </>
  );
};

export default Project;
