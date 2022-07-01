declare var UC_UI: UC_UIInterface
declare interface UC_UIInterface {
	/**
	 * A method to get array of all services with their basic information
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesbaseinfo
	 */
	getServicesBaseInfo?: () => ServiceInfo[]

	/**
	 * A method to get array of all services with their full information.
	 * An extra api request will be made, therefore the return represents
	 * the eventual completion (or failure) of an asynchronous operation
	 * and its returning value.
	 *
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=getservicesfullinfo
	 */
	getServicesFullInfo?: () => Promise<ServiceFullInfo[]>

	/**
	 * A method to check if app is initialized or not
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=isinitialized
	 */
	isInitialized?: () => boolean

	/**
	 * Programmatic way to show First Layer.
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=showfirstlayer
	 */
	showFirstLayer?: () => void

	/**
	 * Programmatic way to show Second Layer. If a service/vendor Id value is passed,
	 * Second Layer will open the right tab, scroll to the given service/vendor entry and expand it.
	 * If no Id is passed, Second Layer will be shown without srcolling to any specific service/vendor.
	 *
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=showsecondlayer
	 */
	showSecondLayer: (serviceId?: string) => void

	/**
	 * A method for accepting a single service.
	 * @see https://docs.usercentrics.com/#/cmp-v2-ui-api?id=acceptservice
	 */
	acceptService?: (serviceId: serviceId, consentType?: ConsentType) => Promise<void>
}
