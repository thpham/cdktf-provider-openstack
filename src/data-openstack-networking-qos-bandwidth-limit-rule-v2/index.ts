// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackNetworkingQosBandwidthLimitRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#id DataOpenstackNetworkingQosBandwidthLimitRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#max_burst_kbps DataOpenstackNetworkingQosBandwidthLimitRuleV2#max_burst_kbps}
  */
  readonly maxBurstKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#max_kbps DataOpenstackNetworkingQosBandwidthLimitRuleV2#max_kbps}
  */
  readonly maxKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#qos_policy_id DataOpenstackNetworkingQosBandwidthLimitRuleV2#qos_policy_id}
  */
  readonly qosPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#region DataOpenstackNetworkingQosBandwidthLimitRuleV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2 openstack_networking_qos_bandwidth_limit_rule_v2}
*/
export class DataOpenstackNetworkingQosBandwidthLimitRuleV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_networking_qos_bandwidth_limit_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackNetworkingQosBandwidthLimitRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackNetworkingQosBandwidthLimitRuleV2 to import
  * @param importFromId The id of the existing DataOpenstackNetworkingQosBandwidthLimitRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackNetworkingQosBandwidthLimitRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_networking_qos_bandwidth_limit_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_qos_bandwidth_limit_rule_v2 openstack_networking_qos_bandwidth_limit_rule_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackNetworkingQosBandwidthLimitRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackNetworkingQosBandwidthLimitRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_networking_qos_bandwidth_limit_rule_v2',
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
    this._id = config.id;
    this._maxBurstKbps = config.maxBurstKbps;
    this._maxKbps = config.maxKbps;
    this._qosPolicyId = config.qosPolicyId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
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

  // max_burst_kbps - computed: true, optional: true, required: false
  private _maxBurstKbps?: number; 
  public get maxBurstKbps() {
    return this.getNumberAttribute('max_burst_kbps');
  }
  public set maxBurstKbps(value: number) {
    this._maxBurstKbps = value;
  }
  public resetMaxBurstKbps() {
    this._maxBurstKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBurstKbpsInput() {
    return this._maxBurstKbps;
  }

  // max_kbps - computed: true, optional: true, required: false
  private _maxKbps?: number; 
  public get maxKbps() {
    return this.getNumberAttribute('max_kbps');
  }
  public set maxKbps(value: number) {
    this._maxKbps = value;
  }
  public resetMaxKbps() {
    this._maxKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKbpsInput() {
    return this._maxKbps;
  }

  // qos_policy_id - computed: false, optional: false, required: true
  private _qosPolicyId?: string; 
  public get qosPolicyId() {
    return this.getStringAttribute('qos_policy_id');
  }
  public set qosPolicyId(value: string) {
    this._qosPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyIdInput() {
    return this._qosPolicyId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_burst_kbps: cdktf.numberToTerraform(this._maxBurstKbps),
      max_kbps: cdktf.numberToTerraform(this._maxKbps),
      qos_policy_id: cdktf.stringToTerraform(this._qosPolicyId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_burst_kbps: {
        value: cdktf.numberToHclTerraform(this._maxBurstKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_kbps: {
        value: cdktf.numberToHclTerraform(this._maxKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_policy_id: {
        value: cdktf.stringToHclTerraform(this._qosPolicyId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
