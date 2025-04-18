"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { getResource } from "@/lib/http";

import { ResourceDetail } from "./resource-detail";

type ResourceMainProps = {
  id: string;
};
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};
export const ResourceMain = ({ id }: ResourceMainProps) => {
  const { data: resource, isLoading } = useQuery({
    queryKey: ["resource", id],
    queryFn: async () => {
      return getResource(id).then((res) => res.data);
    },
  });
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <div className="h-96 animate-pulse rounded-lg bg-gray-200"></div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 pb-16">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          {resource && <ResourceDetail resource={resource} />}
        </motion.div>
      </motion.div>
    </div>
  );
};
