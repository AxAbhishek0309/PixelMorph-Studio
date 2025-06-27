"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FormattedDateTime } from "@/components/FormattedDateTime";

type Summary = {
  title: string;
  url: string;
  icon: string;
  size: number;
  latestDate: string;
  sizeLabel: string;
};

type Props = {
  usageSummary: Summary[];
};

const getCardColor = (title: string) => {
  switch (title.toLowerCase()) {
    case "documents":
      return "bg-[#fa7275]";
    case "images":
      return "bg-[#7b5cf6]";
    case "media":
      return "bg-[#3dd9b3]";
    case "others":
      return "bg-[#a78bfa]";
    default:
      return "bg-[#7b5cf6]";
  }
};

const getTextColor = (isDark: boolean) => isDark ? "text-white" : "text-[#a78bfa]";

const AnimatedSummaryList = ({ usageSummary }: Props) => (
  <ul className="dashboard-summary-list">
    {usageSummary.map((summary, idx) => (
      <motion.li
        key={summary.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.08, type: "spring", stiffness: 60 }}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(80, 80, 200, 0.15)" }}
        className={
          `dashboard-summary-card cursor-pointer border-none bg-white dark:bg-[#18122B] ` +
          `text-[#a78bfa] dark:text-white`
        }
      >
        <Link href={summary.url} className="block h-full w-full">
          <div className="flex flex-col items-center justify-center gap-2 h-full w-full py-4">
            <h5 className="summary-type-title font-bold text-lg text-[#a78bfa] dark:text-white mb-2">{summary.title}</h5>
            <div className="rounded-full p-3 shadow-lg bg-white/80 dark:bg-[#2d225a] mb-2">
              <Image
                src={summary.icon}
                width={40}
                height={40}
                alt="uploaded image"
                className="summary-type-icon"
              />
            </div>
            <h4 className="summary-type-size font-bold text-[#a78bfa] dark:text-white mb-2">
              {summary.sizeLabel}
            </h4>
            <Separator className="bg-[#a78bfa]/40 dark:bg-white/40" />
            <FormattedDateTime
              date={summary.latestDate}
              className="text-center text-[#a78bfa] dark:text-white/80"
            />
          </div>
        </Link>
      </motion.li>
    ))}
  </ul>
);

export default AnimatedSummaryList; 