# UIP Saathi (iOS starter)

A bilingual Gujarati–English SwiftUI starter for health workers using India's Universal Immunisation Programme (UIP). The first screen provides official source links and clearly labels this app as a training/reference aid.

## Open in Xcode

1. On a Mac with Xcode, create a new **iOS App** project named `UIPSaathi` using **SwiftUI** and **Swift**.
2. Replace the generated app entry file and `ContentView.swift` with the matching files in `UIPSaathi/`.
3. Set the deployment target to iOS 16 or later, then build and run on a simulator or device.

This repository currently contains the SwiftUI source starter; it does not yet include a generated `.xcodeproj`.

## Current screens

- Gujarati/English language selector
- Official NHM immunization guidelines, routine immunization manual, and U-WIN links
- Quick-reference feature placeholders
- Training/reference disclaimer

## Clinical content and safety

This starter intentionally does **not** encode vaccine dose, route, schedule, contraindication, AEFI-management, or cold-chain instructions. Confirm those details against the latest applicable MoHFW/NHM documents and state/district instructions before adding them. Government guidance can change; include a visible source and review date for any clinical content added later. This app is not a substitute for official protocols, clinical judgment, or local supervision.

## Official sources

- NHM immunization guidelines and manuals: https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=944&lid=378
- Routine Immunization Manual for Health Workers: https://nccmis.mohfw.gov.in/document/RI_Manual_For_Health_Workers.pdf
- U-WIN: https://uwin.mohfw.gov.in/home

## Privacy

The starter stores no personal, patient, or immunization-record data and has no analytics or network service beyond opening the official links. Do not add identifiable patient information without an approved privacy/security design and appropriate authorization.
