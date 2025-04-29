import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent() {
  return (
    <Pagination>
      <PaginationContent>
        {/* PaginationPrevious với thuộc tính size */}
        <PaginationItem>
          <PaginationPrevious href="#" size="sm">Previous</PaginationPrevious> {/* Thêm size vào đây */}
        </PaginationItem>

        {/* Các trang */}
        <PaginationItem>
          <PaginationLink href="#" size="sm">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="sm">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="sm">3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {/* PaginationNext với href */}
        <PaginationItem>
          <PaginationNext href="#" size="sm">Next</PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
