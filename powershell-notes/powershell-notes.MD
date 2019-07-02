<pre>


Start > Windows PowerShell


$PSVersionTable

	Name                           Value
	----                           -----
	PSVersion                      5.1.17763.503
	PSEdition                      Desktop
	PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
	BuildVersion                   10.0.17763.503
	CLRVersion                     4.0.30319.42000
	WSManStackVersion              3.0
	PSRemotingProtocolVersion      2.3
	SerializationVersion           1.1.0.1



Get-Help Add-AppxPackage

	NAME
		Add-AppxPackage

	SYNTAX
		Add-AppxPackage [-Path] <string> [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion]
		[-InstallAllResources] [-Volume <AppxVolume>] [-ExternalPackages <string[]>] [-OptionalPackages <string[]>] [-RelatedPackages <string[]>] [-WhatIf] [-Confirm]  [<CommonParameters>]

		Add-AppxPackage [-Path] <string> -AppInstallerFile [-RequiredContentGroupOnly] [-ForceTargetApplicationShutdown] [-InstallAllResources] [-Volume <AppxVolume>] [-WhatIf] [-Confirm]
		[<CommonParameters>]

		Add-AppxPackage [-Path] <string> -Register [-DependencyPath <string[]>] [-DisableDevelopmentMode] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown]
		[-ForceUpdateFromAnyVersion] [-InstallAllResources] [-WhatIf] [-Confirm]  [<CommonParameters>]

		Add-AppxPackage [-Path] <string> -Update [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown]
		[-ForceUpdateFromAnyVersion] [-InstallAllResources] [-WhatIf] [-Confirm]  [<CommonParameters>]

		Add-AppxPackage [-Path] <string> -Stage [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceUpdateFromAnyVersion] [-Volume <AppxVolume>] [-ExternalPackages <string[]>]
		[-OptionalPackages <string[]>] [-RelatedPackages <string[]>] [-WhatIf] [-Confirm]  [<CommonParameters>]

		Add-AppxPackage -MainPackage <string> [-Register] [-DependencyPackages <string[]>] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion]
		[-InstallAllResources] [-WhatIf] [-Confirm]  [<CommonParameters>]

		Add-AppxPackage -RegisterByFamilyName -MainPackage <string> [-DependencyPackages <string[]>] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-InstallAllResources]
		[-OptionalPackages <string[]>] [-WhatIf] [-Confirm]  [<CommonParameters>]


	ALIASES
		Add-AppPackage


	REMARKS
		Get-Help cannot find the Help files for this cmdlet on this computer. It is displaying only partial help.
			-- To download and install Help files for the module that includes this cmdlet, use Update-Help.



</pre>
