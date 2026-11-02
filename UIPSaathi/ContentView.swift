import SwiftUI

private enum AppLanguage: String, CaseIterable, Identifiable {
    case gujarati = "ગુજરાતી"
    case english = "English"

    var id: String { rawValue }
}

private struct AppCopy {
    let language: AppLanguage

    var appName: String { language == .gujarati ? "UIP સાથી" : "UIP Saathi" }
    var subtitle: String { language == .gujarati ? "આરોગ્યકર્મીઓ માટે ઝડપી સંદર્ભ" : "A quick reference for health workers" }
    var officialResources: String { language == .gujarati ? "સત્તાવાર માર્ગદર્શિકા" : "Official guidance" }
    var scheduleTitle: String { language == .gujarati ? "રાષ્ટ્રીય રસીકરણ સમયપત્રક" : "National Immunization Schedule" }
    var scheduleDescription: String { language == .gujarati ? "હાલની સૂચનાઓ માટે MoHFW/NHM સ્રોત તપાસો." : "Check MoHFW/NHM sources for current guidance." }
    var checklistTitle: String { language == .gujarati ? "રસીકરણ સત્ર ચેકલિસ્ટ" : "Session checklist" }
    var checklistDescription: String { language == .gujarati ? "સત્ર પહેલાં, દરમિયાન અને પછીના સામાન્ય આયોજન મુદ્દા." : "General planning prompts for before, during and after a session." }
    var learningTitle: String { language == .gujarati ? "શીખો અને યાદ રાખો" : "Learn & remember" }
    var learningDescription: String { language == .gujarati ? "ટૂંકી ક્વિઝ અને અભ્યાસ કાર્ડ્સ ટૂંક સમયમાં." : "Short quizzes and learning cards coming soon." }
    var disclaimer: String { language == .gujarati ? "આ એપ તાલીમ અને સંદર્ભ માટે છે. ક્લિનિકલ નિર્ણય માટે વર્તમાન સરકારી માર્ગદર્શિકા અને સ્થાનિક આરોગ્ય અધિકારીની સૂચનાઓ અનુસરો." : "For training and reference only. For clinical decisions, follow current government guidance and instructions from your local health authority." }
    var sourcesNote: String { language == .gujarati ? "આ એપમાં સમયપત્રકની માહિતી હજી સામેલ નથી; સત્તાવાર દસ્તાવેજ જ જુઓ." : "The schedule is not reproduced in this starter app; consult the official documents." }
}

private struct Resource: Identifiable {
    let title: String
    let detail: String
    let url: URL
    var id: String { title }
}

struct ContentView: View {
    @State private var language: AppLanguage = .gujarati
    private var copy: AppCopy { AppCopy(language: language) }

    private let resources = [
        Resource(title: "NHM Immunization Guidelines", detail: "Guidelines, manuals and programme resources", url: URL(string: "https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=944&lid=378")!),
        Resource(title: "Routine Immunization Manual", detail: "Health worker reference manual (official PDF)", url: URL(string: "https://nccmis.mohfw.gov.in/document/RI_Manual_For_Health_Workers.pdf")!),
        Resource(title: "U-WIN", detail: "Official immunization platform", url: URL(string: "https://uwin.mohfw.gov.in/home")!)
    ]

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    header
                    disclaimerCard
                    sectionHeading(copy.officialResources)
                    ResourceCard(resource: resources[0])
                    ResourceCard(resource: resources[1])
                    ResourceCard(resource: resources[2])
                    sectionHeading(language == .gujarati ? "ઝડપી સંદર્ભ" : "Quick reference")
                    FeatureCard(symbol: "calendar", title: copy.scheduleTitle, detail: copy.scheduleDescription, tint: .blue)
                    FeatureCard(symbol: "checklist", title: copy.checklistTitle, detail: copy.checklistDescription, tint: .green)
                    FeatureCard(symbol: "brain.head.profile", title: copy.learningTitle, detail: copy.learningDescription, tint: .orange)
                    Text(copy.sourcesNote)
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                        .padding(.top, 2)
                }
                .padding()
            }
            .background(Color(uiColor: .systemGroupedBackground))
            .navigationTitle(copy.appName)
            .navigationBarTitleDisplayMode(.inline)
        }
        .tint(.indigo)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .top) {
                Image(systemName: "cross.case.fill")
                    .font(.system(size: 28, weight: .semibold))
                    .foregroundStyle(.white)
                    .frame(width: 54, height: 54)
                    .background(.indigo, in: RoundedRectangle(cornerRadius: 16))
                Spacer()
                Picker(language == .gujarati ? "ભાષા" : "Language", selection: $language) {
                    ForEach(AppLanguage.allCases) { option in
                        Text(option.rawValue).tag(option)
                    }
                }
                .pickerStyle(.menu)
                .accessibilityLabel(language == .gujarati ? "ભાષા પસંદ કરો" : "Choose language")
            }
            Text(copy.subtitle)
                .font(.subheadline)
                .foregroundStyle(.secondary)
        }
        .padding(18)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(.background, in: RoundedRectangle(cornerRadius: 20))
    }

    private var disclaimerCard: some View {
        Label {
            Text(copy.disclaimer)
                .font(.footnote)
                .fixedSize(horizontal: false, vertical: true)
        } icon: {
            Image(systemName: "info.circle.fill")
                .foregroundStyle(.orange)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(.orange.opacity(0.10), in: RoundedRectangle(cornerRadius: 14))
    }

    private func sectionHeading(_ title: String) -> some View {
        Text(title)
            .font(.title3.bold())
            .padding(.top, 4)
    }
}

private struct ResourceCard: View {
    let resource: Resource

    var body: some View {
        Link(destination: resource.url) {
            HStack(spacing: 14) {
                Image(systemName: "doc.text.fill")
                    .font(.title3)
                    .foregroundStyle(.indigo)
                    .frame(width: 42, height: 42)
                    .background(.indigo.opacity(0.10), in: RoundedRectangle(cornerRadius: 12))
                VStack(alignment: .leading, spacing: 4) {
                    Text(resource.title).font(.headline).foregroundStyle(.primary)
                    Text(resource.detail).font(.caption).foregroundStyle(.secondary)
                }
                Spacer(minLength: 4)
                Image(systemName: "arrow.up.right").font(.caption.bold()).foregroundStyle(.secondary)
            }
            .padding(14)
            .background(.background, in: RoundedRectangle(cornerRadius: 16))
        }
        .accessibilityHint("Opens the official resource in your browser")
    }
}

private struct FeatureCard: View {
    let symbol: String
    let title: String
    let detail: String
    let tint: Color

    var body: some View {
        HStack(spacing: 14) {
            Image(systemName: symbol)
                .font(.title3)
                .foregroundStyle(tint)
                .frame(width: 42, height: 42)
                .background(tint.opacity(0.12), in: RoundedRectangle(cornerRadius: 12))
            VStack(alignment: .leading, spacing: 4) {
                Text(title).font(.headline)
                Text(detail).font(.caption).foregroundStyle(.secondary)
            }
            Spacer(minLength: 0)
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(.background, in: RoundedRectangle(cornerRadius: 16))
    }
}

#Preview {
    ContentView()
}
