# `dataOpenstackFwRuleV2` Submodule <a name="`dataOpenstackFwRuleV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackFwRuleV2 <a name="DataOpenstackFwRuleV2" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2 openstack_fw_rule_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackFwRuleV2.DataOpenstackFwRuleV2(scope: Construct, id: string, config?: DataOpenstackFwRuleV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config">DataOpenstackFwRuleV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config">DataOpenstackFwRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDestinationIpAddress">resetDestinationIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetFirewallPolicyId">resetFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetShared">resetShared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetSourcePort">resetSourcePort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAction` <a name="resetAction" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationIpAddress` <a name="resetDestinationIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDestinationIpAddress"></a>

```typescript
public resetDestinationIpAddress(): void
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetDestinationPort"></a>

```typescript
public resetDestinationPort(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFirewallPolicyId` <a name="resetFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetFirewallPolicyId"></a>

```typescript
public resetFirewallPolicyId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetShared` <a name="resetShared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetShared"></a>

```typescript
public resetShared(): void
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetSourceIpAddress"></a>

```typescript
public resetSourceIpAddress(): void
```

##### `resetSourcePort` <a name="resetSourcePort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetSourcePort"></a>

```typescript
public resetSourcePort(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackFwRuleV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isConstruct"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformElement"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackFwRuleV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackFwRuleV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackFwRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackFwRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationIpAddressInput">destinationIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationPortInput">destinationPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.firewallPolicyIdInput">firewallPolicyIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourcePortInput">sourcePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationIpAddress">destinationIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationPort">destinationPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.firewallPolicyId">firewallPolicyId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourcePort">sourcePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationIpAddressInput`<sup>Optional</sup> <a name="destinationIpAddressInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationIpAddressInput"></a>

```typescript
public readonly destinationIpAddressInput: string;
```

- *Type:* string

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationPortInput"></a>

```typescript
public readonly destinationPortInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallPolicyIdInput`<sup>Optional</sup> <a name="firewallPolicyIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.firewallPolicyIdInput"></a>

```typescript
public readonly firewallPolicyIdInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourceIpAddressInput"></a>

```typescript
public readonly sourceIpAddressInput: string;
```

- *Type:* string

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourcePortInput"></a>

```typescript
public readonly sourcePortInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationIpAddress`<sup>Required</sup> <a name="destinationIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationIpAddress"></a>

```typescript
public readonly destinationIpAddress: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.destinationPort"></a>

```typescript
public readonly destinationPort: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallPolicyId`<sup>Required</sup> <a name="firewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.firewallPolicyId"></a>

```typescript
public readonly firewallPolicyId: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackFwRuleV2Config <a name="DataOpenstackFwRuleV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.Initializer"></a>

```typescript
import { dataOpenstackFwRuleV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackFwRuleV2Config: dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#action DataOpenstackFwRuleV2#action}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#description DataOpenstackFwRuleV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.destinationIpAddress">destinationIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#destination_ip_address DataOpenstackFwRuleV2#destination_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.destinationPort">destinationPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#destination_port DataOpenstackFwRuleV2#destination_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#enabled DataOpenstackFwRuleV2#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.firewallPolicyId">firewallPolicyId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#firewall_policy_id DataOpenstackFwRuleV2#firewall_policy_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#id DataOpenstackFwRuleV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#ip_version DataOpenstackFwRuleV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#name DataOpenstackFwRuleV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#project_id DataOpenstackFwRuleV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#protocol DataOpenstackFwRuleV2#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#region DataOpenstackFwRuleV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#rule_id DataOpenstackFwRuleV2#rule_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#shared DataOpenstackFwRuleV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.sourceIpAddress">sourceIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#source_ip_address DataOpenstackFwRuleV2#source_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.sourcePort">sourcePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#source_port DataOpenstackFwRuleV2#source_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#tenant_id DataOpenstackFwRuleV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Optional</sup> <a name="action" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#action DataOpenstackFwRuleV2#action}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#description DataOpenstackFwRuleV2#description}.

---

##### `destinationIpAddress`<sup>Optional</sup> <a name="destinationIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.destinationIpAddress"></a>

```typescript
public readonly destinationIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#destination_ip_address DataOpenstackFwRuleV2#destination_ip_address}.

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.destinationPort"></a>

```typescript
public readonly destinationPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#destination_port DataOpenstackFwRuleV2#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#enabled DataOpenstackFwRuleV2#enabled}.

---

##### `firewallPolicyId`<sup>Optional</sup> <a name="firewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.firewallPolicyId"></a>

```typescript
public readonly firewallPolicyId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#firewall_policy_id DataOpenstackFwRuleV2#firewall_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#id DataOpenstackFwRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#ip_version DataOpenstackFwRuleV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#name DataOpenstackFwRuleV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#project_id DataOpenstackFwRuleV2#project_id}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#protocol DataOpenstackFwRuleV2#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#region DataOpenstackFwRuleV2#region}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#rule_id DataOpenstackFwRuleV2#rule_id}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#shared DataOpenstackFwRuleV2#shared}.

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.sourceIpAddress"></a>

```typescript
public readonly sourceIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#source_ip_address DataOpenstackFwRuleV2#source_ip_address}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.sourcePort"></a>

```typescript
public readonly sourcePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#source_port DataOpenstackFwRuleV2#source_port}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwRuleV2.DataOpenstackFwRuleV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_rule_v2#tenant_id DataOpenstackFwRuleV2#tenant_id}.

---



