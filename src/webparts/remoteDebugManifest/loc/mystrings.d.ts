declare interface IRemoteDebugManifestWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'RemoteDebugManifestWebPartStrings' {
  const strings: IRemoteDebugManifestWebPartStrings;
  export = strings;
}
