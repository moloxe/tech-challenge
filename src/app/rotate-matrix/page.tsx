import { Metadata } from "next";
import MatrixPage from "./_components/MatrixPage";

export const metadata: Metadata = {
  title: "Rotate Matrix",
  description: "This page allows you to rotate an input matrix to the left.",
  keywords: "rotate matrix, matrix, rotate, left",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rotate Matrix Tool",
  description: "This page allows you to rotate an input matrix to the left",
  applicationCategory: "WebApplication",
  operatingSystem: "All",
  url: `${process.env.PROD_URL}/rotate-matrix`,
};

const RotateMatrixPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MatrixPage />
    </>
  );
};

export default RotateMatrixPage;
