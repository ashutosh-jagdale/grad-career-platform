// international-support.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InternationalSupport() {
  return (
    <div className="space-y-6 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">International Student Support</h1>

      <Card>
        <CardHeader><CardTitle>OPT/CPT & Visa Info</CardTitle></CardHeader>
        <CardContent>
          <p>Clear breakdown of timelines, renewal tips, and FAQs with USCIS/DSO links.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Alumni Experiences</CardTitle></CardHeader>
        <CardContent>
          <p>Stories of how international students navigated job hunts, interviews, and visas.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Cultural Adjustment Resources</CardTitle></CardHeader>
        <CardContent>
          <p>Guides for adapting to workplace norms, communication styles, and networking events in the U.S.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Campus & Legal Support</CardTitle></CardHeader>
        <CardContent>
          <p>Contacts for legal clinics, international student services, and tax help portals like Sprintax.</p>
        </CardContent>
      </Card>
    </div>
  );
} 
