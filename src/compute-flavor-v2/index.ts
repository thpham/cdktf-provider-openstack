// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFlavorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}
  */
  readonly disk: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}
  */
  readonly ephemeral?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}
  */
  readonly extraSpecs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}
  */
  readonly ram: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}
  */
  readonly rxTxFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}
  */
  readonly swap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}
  */
  readonly vcpus: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2 openstack_compute_flavor_v2}
*/
export class ComputeFlavorV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_compute_flavor_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeFlavorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeFlavorV2 to import
  * @param importFromId The id of the existing ComputeFlavorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeFlavorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_compute_flavor_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2 openstack_compute_flavor_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFlavorV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeFlavorV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_compute_flavor_v2',
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
    this._description = config.description;
    this._disk = config.disk;
    this._ephemeral = config.ephemeral;
    this._extraSpecs = config.extraSpecs;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._ram = config.ram;
    this._region = config.region;
    this._rxTxFactor = config.rxTxFactor;
    this._swap = config.swap;
    this._vcpus = config.vcpus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral?: number; 
  public get ephemeral() {
    return this.getNumberAttribute('ephemeral');
  }
  public set ephemeral(value: number) {
    this._ephemeral = value;
  }
  public resetEphemeral() {
    this._ephemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
  }

  // extra_specs - computed: true, optional: true, required: false
  private _extraSpecs?: { [key: string]: string }; 
  public get extraSpecs() {
    return this.getStringMapAttribute('extra_specs');
  }
  public set extraSpecs(value: { [key: string]: string }) {
    this._extraSpecs = value;
  }
  public resetExtraSpecs() {
    this._extraSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSpecsInput() {
    return this._extraSpecs;
  }

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
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

  // rx_tx_factor - computed: false, optional: true, required: false
  private _rxTxFactor?: number; 
  public get rxTxFactor() {
    return this.getNumberAttribute('rx_tx_factor');
  }
  public set rxTxFactor(value: number) {
    this._rxTxFactor = value;
  }
  public resetRxTxFactor() {
    this._rxTxFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxTxFactorInput() {
    return this._rxTxFactor;
  }

  // swap - computed: false, optional: true, required: false
  private _swap?: number; 
  public get swap() {
    return this.getNumberAttribute('swap');
  }
  public set swap(value: number) {
    this._swap = value;
  }
  public resetSwap() {
    this._swap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapInput() {
    return this._swap;
  }

  // vcpus - computed: false, optional: false, required: true
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disk: cdktf.numberToTerraform(this._disk),
      ephemeral: cdktf.numberToTerraform(this._ephemeral),
      extra_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraSpecs),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      ram: cdktf.numberToTerraform(this._ram),
      region: cdktf.stringToTerraform(this._region),
      rx_tx_factor: cdktf.numberToTerraform(this._rxTxFactor),
      swap: cdktf.numberToTerraform(this._swap),
      vcpus: cdktf.numberToTerraform(this._vcpus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ephemeral: {
        value: cdktf.numberToHclTerraform(this._ephemeral),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extra_specs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraSpecs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_tx_factor: {
        value: cdktf.numberToHclTerraform(this._rxTxFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swap: {
        value: cdktf.numberToHclTerraform(this._swap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpus: {
        value: cdktf.numberToHclTerraform(this._vcpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
