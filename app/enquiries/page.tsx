import { EnquiryForm } from "@/components/EnquiryForm";
export default function Enquiries() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Enquiries</div>
          <h1 className="section-title serif">
            We'd love to hear
            <br />
            about it.
          </h1>
          <p className="lead">
            Have a question or want to discuss a project? Send us a message and
            we'll get back to you.
          </p>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
