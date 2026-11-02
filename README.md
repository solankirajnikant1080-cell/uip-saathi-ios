# UIP સાથી · UIP Saathi

A bilingual Gujarati-English responsive web app for health workers learning and referring to India's Universal Immunisation Programme (UIP). It is designed to work in a phone or desktop browser—no Mac, Xcode, app installation, or local build is required.

## What's included

- Gujarati and English interface with remembered language preference
- Official NHM immunization resource, Routine Immunization Manual, and U-WIN links
- General session-planning checklist saved locally in the browser
- Short learning question and a three-stage memory aid
- Mobile-friendly layout and clear clinical-use disclaimer
- GitHub Actions workflow to publish this static site on GitHub Pages

## Publish it on GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. The workflow deploys automatically when changes are pushed to `main`. Follow progress in the **Actions** tab.
4. After the first successful deployment, open the Pages URL shown in the workflow or repository Pages settings. It will look like `https://solankirajnikant1080-cell.github.io/uip-saathi-ios/`.

No Xcode, Mac, or Apple Developer account is needed to use the web app. You can bookmark the published URL on a phone.

## Official sources

- NHM immunization guidelines and manuals: https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=944&lid=378
- Routine Immunization Manual for Health Workers: https://nccmis.mohfw.gov.in/document/RI_Manual_For_Health_Workers.pdf
- U-WIN: https://uwin.mohfw.gov.in/home

## Clinical content and privacy

This app is a learning and reference aid, not a clinical protocol. The checklist is a general planning prompt, not a substitute for official procedures. This version intentionally does not reproduce vaccine schedules, dose/route instructions, contraindications, or AEFI management steps; consult current MoHFW/NHM guidance and state/district instructions. Add clinical details only with source citations and review dates.

The checklist and language choice are stored in the user's browser local storage. No patient information, analytics, or user accounts are collected.
