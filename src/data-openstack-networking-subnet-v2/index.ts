// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackNetworkingSubnetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}
  */
  readonly dhcpDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}
  */
  readonly dhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}
  */
  readonly ipv6AddressMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}
  */
  readonly ipv6RaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}
  */
  readonly subnetpoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}
  */
  readonly tags?: string[];
  /**
  * The ID of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tenant_id DataOpenstackNetworkingSubnetV2#tenant_id}
  */
  readonly tenantId?: string;
}
export interface DataOpenstackNetworkingSubnetV2AllocationPools {
}

export function dataOpenstackNetworkingSubnetV2AllocationPoolsToTerraform(struct?: DataOpenstackNetworkingSubnetV2AllocationPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenstackNetworkingSubnetV2AllocationPoolsToHclTerraform(struct?: DataOpenstackNetworkingSubnetV2AllocationPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenstackNetworkingSubnetV2AllocationPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenstackNetworkingSubnetV2AllocationPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }
}

export class DataOpenstackNetworkingSubnetV2AllocationPoolsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference {
    return new DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenstackNetworkingSubnetV2HostRoutes {
}

export function dataOpenstackNetworkingSubnetV2HostRoutesToTerraform(struct?: DataOpenstackNetworkingSubnetV2HostRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenstackNetworkingSubnetV2HostRoutesToHclTerraform(struct?: DataOpenstackNetworkingSubnetV2HostRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenstackNetworkingSubnetV2HostRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenstackNetworkingSubnetV2HostRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenstackNetworkingSubnetV2HostRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
}

export class DataOpenstackNetworkingSubnetV2HostRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOpenstackNetworkingSubnetV2HostRoutesOutputReference {
    return new DataOpenstackNetworkingSubnetV2HostRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2 openstack_networking_subnet_v2}
*/
export class DataOpenstackNetworkingSubnetV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_networking_subnet_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackNetworkingSubnetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackNetworkingSubnetV2 to import
  * @param importFromId The id of the existing DataOpenstackNetworkingSubnetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackNetworkingSubnetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_networking_subnet_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2 openstack_networking_subnet_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackNetworkingSubnetV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackNetworkingSubnetV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'openstack_networking_subnet_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '1.54.1',
        providerVersionConstraint: '~> 1.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._description = config.description;
    this._dhcpDisabled = config.dhcpDisabled;
    this._dhcpEnabled = config.dhcpEnabled;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._ipv6AddressMode = config.ipv6AddressMode;
    this._ipv6RaMode = config.ipv6RaMode;
    this._name = config.name;
    this._networkId = config.networkId;
    this._region = config.region;
    this._subnetId = config.subnetId;
    this._subnetpoolId = config.subnetpoolId;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
  }

  // allocation_pools - computed: true, optional: false, required: false
  private _allocationPools = new DataOpenstackNetworkingSubnetV2AllocationPoolsList(this, "allocation_pools", false);
  public get allocationPools() {
    return this._allocationPools;
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp_disabled - computed: false, optional: true, required: false
  private _dhcpDisabled?: boolean | cdktf.IResolvable; 
  public get dhcpDisabled() {
    return this.getBooleanAttribute('dhcp_disabled');
  }
  public set dhcpDisabled(value: boolean | cdktf.IResolvable) {
    this._dhcpDisabled = value;
  }
  public resetDhcpDisabled() {
    this._dhcpDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDisabledInput() {
    return this._dhcpDisabled;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpEnabled() {
    return this.getBooleanAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dns_nameservers - computed: true, optional: false, required: false
  public get dnsNameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_nameservers'));
  }

  // enable_dhcp - computed: true, optional: false, required: false
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }

  // gateway_ip - computed: true, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // host_routes - computed: true, optional: false, required: false
  private _hostRoutes = new DataOpenstackNetworkingSubnetV2HostRoutesList(this, "host_routes", false);
  public get hostRoutes() {
    return this._hostRoutes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // ipv6_address_mode - computed: true, optional: true, required: false
  private _ipv6AddressMode?: string; 
  public get ipv6AddressMode() {
    return this.getStringAttribute('ipv6_address_mode');
  }
  public set ipv6AddressMode(value: string) {
    this._ipv6AddressMode = value;
  }
  public resetIpv6AddressMode() {
    this._ipv6AddressMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressModeInput() {
    return this._ipv6AddressMode;
  }

  // ipv6_ra_mode - computed: true, optional: true, required: false
  private _ipv6RaMode?: string; 
  public get ipv6RaMode() {
    return this.getStringAttribute('ipv6_ra_mode');
  }
  public set ipv6RaMode(value: string) {
    this._ipv6RaMode = value;
  }
  public resetIpv6RaMode() {
    this._ipv6RaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RaModeInput() {
    return this._ipv6RaMode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_types - computed: true, optional: false, required: false
  public get serviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('service_types'));
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnetpool_id - computed: true, optional: true, required: false
  private _subnetpoolId?: string; 
  public get subnetpoolId() {
    return this.getStringAttribute('subnetpool_id');
  }
  public set subnetpoolId(value: string) {
    this._subnetpoolId = value;
  }
  public resetSubnetpoolId() {
    this._subnetpoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetpoolIdInput() {
    return this._subnetpoolId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      dhcp_disabled: cdktf.booleanToTerraform(this._dhcpDisabled),
      dhcp_enabled: cdktf.booleanToTerraform(this._dhcpEnabled),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.numberToTerraform(this._ipVersion),
      ipv6_address_mode: cdktf.stringToTerraform(this._ipv6AddressMode),
      ipv6_ra_mode: cdktf.stringToTerraform(this._ipv6RaMode),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subnetpool_id: cdktf.stringToTerraform(this._subnetpoolId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_disabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.numberToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_address_mode: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ra_mode: {
        value: cdktf.stringToHclTerraform(this._ipv6RaMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetpool_id: {
        value: cdktf.stringToHclTerraform(this._subnetpoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
