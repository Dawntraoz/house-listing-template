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