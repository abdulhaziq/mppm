import { BRAND } from "@/lib/brand";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageNav } from "@/components/PageNav";
import { agencyIntro, teamMembers, credentials, techStack } from "@/lib/data/team";

export default function TeamPage() {
  return (
    <main>
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, ${BRAND.dark}, #061A16)` }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">03 / Our Team</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Pasukan Kami</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{agencyIntro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Ahli Pasukan" title="Individu di sebalik cadangan ini" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name}><div className="p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl text-4xl" style={{ backgroundColor: BRAND.soft }}>👤</div>
              <h3 className="mt-4 font-bold text-slate-950">{member.name}</h3>
              <p className="text-sm font-medium" style={{ color: BRAND.primary }}>{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
            </div></Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Pengalaman" title="Projek yang relevan" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {credentials.map((cred) => (
              <Card key={cred.title}><div className="p-6">
                <h3 className="font-bold text-slate-950">{cred.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{cred.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cred.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: BRAND.primary }}>{tag}</span>
                  ))}
                </div>
              </div></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Tech Stack" title="Teknologi yang kami gunakan" />
        <div className="mt-8 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">{tech}</span>
          ))}
        </div>
      </section>

      <PageNav currentHref="/team" />
    </main>
  );
}
