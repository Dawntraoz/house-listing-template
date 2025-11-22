// Listings endpoint types from Funda Partner API
export interface FundaApiResponse {
  AccountStatus: number;
  EmailNotConfirmed: boolean;
  ValidationFailed: boolean;
  ValidationReport: null;
  Website: number;
  Metadata: Metadata;
  Objects: Listing[];
  Paging: Paging;
  TotaalAantalObjecten: number;
}

export interface Metadata {
  ObjectType: string;
  Omschrijving: string;
  Titel: string;
}

export interface Listing {
  AangebodenSindsTekst: string;
  AanmeldDatum: string;
  AantalBeschikbaar: null;
  AantalKamers: number;
  AantalKavels: null;
  Aanvaarding: string;
  Adres: string;
  Afstand: number;
  BronCode: string;
  ChildrenObjects: any[];
  DatumAanvaarding: string | null;
  DatumOndertekeningAkte: null;
  Foto: string;
  FotoLarge: string;
  FotoLargest: string;
  FotoMedium: string;
  FotoSecure: string;
  GewijzigdDatum: null;
  GlobalId: number;
  GroupByObjectType: string;
  Heeft360GradenFoto: boolean;
  HeeftBrochure: boolean;
  HeeftOpenhuizenTopper: boolean;
  HeeftOverbruggingsgrarantie: boolean;
  HeeftPlattegrond: boolean;
  HeeftTophuis: boolean;
  HeeftVeiling: boolean;
  HeeftVideo: boolean;
  HuurPrijsTot: null;
  Huurprijs: null;
  HuurprijsFormaat: null;
  Id: string;
  InUnitsVanaf: null;
  IndProjectObjectType: boolean;
  IndTransactieMakelaarTonen: null;
  IsSearchable: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  IsVerkochtOfVerhuurd: boolean;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot: number;
  Land: null;
  MakelaarId: number;
  MakelaarNaam: string;
  MobileURL: string;
  Note: null;
  OpenHuis: any[];
  Oppervlakte: number;
  Perceeloppervlakte: number;
  Postcode: string;
  Prijs: Price;
  PrijsGeformatteerdHtml: string;
  PrijsGeformatteerdTextHuur: string;
  PrijsGeformatteerdTextKoop: string;
  Producten: string[];
  Project: Project;
  ProjectNaam: null;
  PromoLabel: PromoLabel;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SavedDate: null;
  "Soort-aanbod": string;
  SoortAanbod: number;
  StartOplevering: null;
  TimeAgoText: null;
  TransactieAfmeldDatum: null;
  TransactieMakelaarId: null;
  TransactieMakelaarNaam: null;
  TypeProject: number;
  URL: string;
  VerkoopStatus: string;
  WGS84_X: number;
  WGS84_Y: number;
  WoonOppervlakteTot: number;
  Woonoppervlakte: number;
  Woonplaats: string;
  ZoekType: number[];
}

export interface Price {
  GeenExtraKosten: boolean;
  HuurAbbreviation: string;
  Huurprijs: null;
  HuurprijsOpAanvraag: string;
  HuurprijsTot: null;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot: number;
  OriginelePrijs: null;
  VeilingText: string;
}

export interface Project {
  AantalKamersTotEnMet: null;
  AantalKamersVan: null;
  AantalKavels: null;
  Adres: null;
  FriendlyUrl: null;
  GewijzigdDatum: null;
  GlobalId: null;
  HoofdFoto: string;
  IndIpix: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVideo: boolean;
  InternalId: string;
  MaxWoonoppervlakte: null;
  MinWoonoppervlakte: null;
  Naam: null;
  Omschrijving: null;
  OpenHuizen: any[];
  Plaats: null;
  Prijs: null;
  PrijsGeformatteerd: null;
  PublicatieDatum: null;
  Type: number;
  Woningtypen: null;
}

export interface PromoLabel {
  HasPromotionLabel: boolean;
  PromotionPhotos: string[];
  PromotionPhotosSecure: string[] | null;
  PromotionType: number;
  RibbonColor: number;
  RibbonText: null;
  Tagline: string | null;
}

export interface Paging {
  AantalPaginas: number;
  HuidigePagina: number;
  VolgendeUrl: string;
  VorigeUrl: string | null;
}

// Listing details endpoint (Funda Partner API)
export interface FundaListing {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number | null;
  AantalKamers: number;
  AantalSlaapkamers: number | null;
  AantalWoonlagen: string | null;
  Aanvaarding: string | null;
  Adres: string | null;
  AfgekochtDatum: string | null;
  BalkonDakterras: string | null;
  BedrijfsruimteCombinatieObject: any | null;
  BezichtingDagdelen: NameValuePair[];
  BezichtingDagen: NameValuePair[];
  BijdrageVVE: any | null;
  Bijzonderheden: any | null;
  Bouwjaar: string | null;
  Bouwvorm: string | null;
  BronCode: string | null;
  ContactpersoonEmail: string | null;
  ContactpersoonTelefoon: string | null;
  Cv: string | null;
  DatumOndertekeningAkte: string | null;
  Deeplink: string | null;
  DetailInfo: DetailInfo;
  EigendomsSituatie: string | null;
  Energielabel: Energielabel;
  ErfpachtBedrag: any | null;
  Garage: string | null;
  GarageIsolatie: string | null;
  GarageVoorzieningen: string | null;
  GelegenOp: string | null;
  GewijzigdDatum: string;
  HoofdFoto: string | null;
  HoofdFotoSecure: string | null;
  HoofdTuinType: string | null;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number | null;
  InternalId: string | null;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string | null;
  Kenmerken: KenmerkenGroup[];
  "KenmerkenKort": KenmerkenGroup;
  KenmerkenTitel: string | null;
  Ligging: string | null;
  MLIUrl: string | null;
  Makelaar: string | null;
  MakelaarId: number | null;
  MakelaarTelefoon: string | null;
  MedeAanbieders: any[];
  Media: MediaEntry[];
  "Media-Foto": string[];
  MobileURL: string | null;
  ObjectType: string | null;
  ObjectTypeMetVoorvoegsel: string | null;
  OpenHuizen: any[];
  PerceelOppervlakte: number | null;
  PermanenteBewoning: string | null;
  Plaats: string | null;
  Postcode: string | null;
  Prijs: Price;
  PrijsGeformatteerd: string | null;
  Project: Project;
  ProjectNaam: string | null;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging: string | null;
  SchuurBergingIsolatie: string | null;
  SchuurBergingVoorzieningen: string | null;
  ScrambledId: string | null;
  ServiceKosten: number | null;
  SoortAanbod: number | null;
  SoortDak: string | null;
  SoortGarage: string | null;
  SoortParkeergelegenheid: string | null;
  SoortPlaatsing: number | null;
  SoortWoning: string | null;
  Titels: TitleEntry[];
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum: string | null;
  TransactieMakelaarId: number | null;
  TransactieMakelaarNaam: string | null;
  TuinLigging: string | null;
  TypeProject: number;
  URL: string | null;
  Veiling: Veiling;
  VerkoopStatus: string | null;
  Verwarming: string | null;
  Video: any | null;
  VolledigeOmschrijving: string | null;
  Voorzieningen: string | null;
  WGS84_X: number | null;
  WGS84_Y: number | null;
  WarmWater: string | null;
  WoonOppervlakte: number | null;
  EersteHuurPrijs: any | null;
  EersteHuurPrijsLang: any | null;
  EersteKoopPrijs: any | null;
  EersteKoopPrijsLang: any | null;
  HuurPrijs: any | null;
  HuurPrijsLang: any | null;
  HuurPrijsTot: any | null;
  Huurprijs: any | null;
  HuurprijsFormaat: any | null;
  KoopPrijs: number | null;
  KoopPrijsLang: string | null;
  Koopprijs: number | null;
  KoopprijsFormaat: string | null;
  KoopprijsTot: any | null;
  ShortURL: string | null;
  Tuin: string | null;
  VeilingGeformatteerd: any | null;
}

export interface NameValuePair {
  Naam: string | null;
  Waarde: string | null;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number | null;
  RibbonColor: number | null;
  RibbonText: string | null;
  Tagline: string | null;
}

export interface Energielabel {
  Definitief: boolean;
  Index: number | null;
  Label: string | null;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface KenmerkItem {
  Naam: string | null;
  NaamCss?: string | null;
  Waarde: string | null;
  WaardeCss?: string | null;
}

export interface KenmerkenGroup {
  Ad: string | null;
  Kenmerken: KenmerkItem[];
  LokNummer: number;
  SubKenmerk?: KenmerkenGroup | null;
  Titel: string | null;
}

export interface MediaItem {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure: string;
  Width: number;
}

export interface MediaEntry {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItem[];
  Metadata: string | null;
  Omschrijving: string | null;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export interface TitleEntry {
  Omschrijving: string;
  Pagina: number;
}

export interface Veiling {
  EindDatum: string | null;
  Link: string | null;
  StartDatum: string | null;
  VeilingPartij: string | null;
}