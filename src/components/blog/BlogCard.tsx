import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: string[];
  imageSrc: string;
  featured?: boolean;
  compact?: boolean;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  date,
  author,
  categories,
  imageSrc,
  featured = false,
  compact = false,
}: BlogCardProps) {
  if (compact) {
    return (
      <Card className="overflow-hidden border-0 shadow-sm rounded-lg aspect-square flex flex-col">
        <div className="relative w-full aspect-square">
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-10">
            {categories.map((category) => (
              <Badge key={category} className="bg-background/80 backdrop-blur-sm text-xs px-2 py-0.5">
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <CardContent className="p-3 pb-2 flex-1 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-1">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-medium">{author.name}</p>
              <p className="text-[10px] text-muted-foreground">{date}</p>
            </div>
          </div>
          <Link to={`/blog/${id}`}>
            <h3 className="font-heading text-base font-semibold leading-tight mb-1 hover:text-primary transition-colors line-clamp-2">{title}</h3>
          </Link>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-3">
            {excerpt}
          </p>
          <Link
            to={`/blog/${id}`}
            className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
          >
            Read
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden border-0 shadow-md transition-all duration-200 hover:shadow-lg ${
      featured ? 'lg:flex' : ''
    }`}>
      <div className={`relative ${featured ? 'lg:w-1/2' : ''}`}>
        <img
          src={imageSrc}
          alt={title}
          className="h-48 w-full object-cover lg:h-full"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardContent className={`p-5 ${featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
        <div className="mb-4 flex items-center space-x-2">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        
        <Link to={`/blog/${id}`}>
          <h3 className={`font-heading mb-2 hover:text-primary transition-colors ${
            featured ? 'text-2xl font-bold' : 'text-lg font-semibold'
          }`}>
            {title}
          </h3>
        </Link>
        
        <p className="mb-4 text-muted-foreground">
          {excerpt}
        </p>
        
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}
