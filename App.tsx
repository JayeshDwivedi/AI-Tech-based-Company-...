import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Service Pages
import ArtificialIntelligence from "@/pages/services/ArtificialIntelligence";
import IoTSolutions from "@/pages/services/IoTSolutions";
import Cybersecurity from "@/pages/services/Cybersecurity";
import ITInfrastructure from "@/pages/services/ITInfrastructure";
import Telecommunication from "@/pages/services/Telecommunication";
import Surveillance from "@/pages/services/Surveillance";
import Automation from "@/pages/services/Automation";
import IndustrialAutomation from "@/pages/services/IndustrialAutomation";

// Industrial Pages
import Healthcare from "@/pages/industrial/Healthcare";
import Mining from "@/pages/industrial/Mining";
import Agriculture from "@/pages/industrial/Agriculture";
import Automobile from "@/pages/industrial/Automobile";
import Retail from "@/pages/industrial/Retail";

function Router() {
  const [location] = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Service Routes */}
        <Route path="/ai-services" component={ArtificialIntelligence} />
        <Route path="/iot-solutions" component={IoTSolutions} />
        <Route path="/cybersecurity" component={Cybersecurity} />
        <Route path="/it-infrastructure" component={ITInfrastructure} />
        <Route path="/telecommunication" component={Telecommunication} />
        <Route path="/surveillance" component={Surveillance} />
        <Route path="/automation" component={Automation} />
        <Route path="/industrial-automation" component={IndustrialAutomation} />
        
        {/* Industrial Routes */}
        <Route path="/healthcare" component={Healthcare} />
        <Route path="/mining" component={Mining} />
        <Route path="/agriculture" component={Agriculture} />
        <Route path="/automobile" component={Automobile} />
        <Route path="/retail" component={Retail} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
