import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom"; // Assuming you use React Router for navigation
import React from "react";

export function BreadcrumbWithCustomSeparator() {
  const location = useLocation(); 
  
  const pathname = location.pathname;
  
  // Split the pathname into segments and clean up empty strings
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment, index, array) => {
      // Convert segment to title case (e.g., "create" -> "Create")
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      const href = "/" + array.slice(0, index + 1).join("/"); // Generate the href for the segment
      return { label, href };
    });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === pathSegments.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage> // Current page, no link
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink> // Link to the segment
              )}
            </BreadcrumbItem>
            {index < pathSegments.length - 1 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
