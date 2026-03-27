
import Link from 'next/link';
import { Card, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavigationCardProps } from '@/types/dashboard.types';



export default function NavigationCard({
  href,
  icon: Icon,
  title,
  subtitle,
  buttonText = "Go to Page",
  className = "",
}: NavigationCardProps) {
  return (
    <Link href={href} className="block">
      <Card className={`h-full border-primary transition-all group ${className}`}>
        <CardHeader className="pb-6">
          <div className="flex items-start gap-4">
  
            <div className="w-14 h-14 bg-primary  rounded-lg flex items-center justify-center ">
              <Icon className="w-7 h-7 text-white" />
            </div>
            
      
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-primary transition-colors mb-1 leading-tight">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardFooter className="">
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md transition-all duration-300 font-semibold text-base"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}