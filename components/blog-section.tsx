import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import blogData from "@/data/blog.json";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export function BlogSection() {
  // Sort posts by date (newest first) and get only the latest 3
  const latestPosts = [...blogData.posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        {blogData.posts.length > 3 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              <a href="blogs">View All Blog </a>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
