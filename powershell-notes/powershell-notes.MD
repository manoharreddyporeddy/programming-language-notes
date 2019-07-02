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



Windows Management Framework

    https://docs.microsoft.com/en-us/powershell/wmf/overview




PowerShell ISE
	The Windows PowerShell Integrated Scripting Environment (ISE) is a host application for Windows PowerShell. In Windows PowerShell ISE, you can run commands and write, test, and debug scripts in a single Windows-based graphic user interface with multiline editing, tab completion, syntax coloring, selective execution, context-sensitive help, and support for right-to-left languages.

	You can use menu items and keyboard shortcuts to perform many of the same tasks that you would perform in the Windows PowerShell console. For example, when you debug a script in the Windows PowerShell ISE, to set a line breakpoint in a script, right-click the line of code, and then click Toggle Breakpoint.

	To open it you just go to Start - Search and then Type - PowerShell as shown in the following screenshot.





</pre>
