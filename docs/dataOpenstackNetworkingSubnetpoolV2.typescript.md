# `dataOpenstackNetworkingSubnetpoolV2` Submodule <a name="`dataOpenstackNetworkingSubnetpoolV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetpoolV2 <a name="DataOpenstackNetworkingSubnetpoolV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2 openstack_networking_subnetpool_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2(scope: Construct, id: string, config?: DataOpenstackNetworkingSubnetpoolV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config">DataOpenstackNetworkingSubnetpoolV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config">DataOpenstackNetworkingSubnetpoolV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetAddressScopeId">resetAddressScopeId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultPrefixlen">resetDefaultPrefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultQuota">resetDefaultQuota</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMaxPrefixlen">resetMaxPrefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMinPrefixlen">resetMinPrefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetShared">resetShared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAddressScopeId` <a name="resetAddressScopeId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetAddressScopeId"></a>

```typescript
public resetAddressScopeId(): void
```

##### `resetDefaultPrefixlen` <a name="resetDefaultPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultPrefixlen"></a>

```typescript
public resetDefaultPrefixlen(): void
```

##### `resetDefaultQuota` <a name="resetDefaultQuota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultQuota"></a>

```typescript
public resetDefaultQuota(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetMaxPrefixlen` <a name="resetMaxPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMaxPrefixlen"></a>

```typescript
public resetMaxPrefixlen(): void
```

##### `resetMinPrefixlen` <a name="resetMinPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMinPrefixlen"></a>

```typescript
public resetMinPrefixlen(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetShared` <a name="resetShared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetShared"></a>

```typescript
public resetShared(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingSubnetpoolV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingSubnetpoolV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetpoolV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.prefixes">prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.revisionNumber">revisionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeIdInput">addressScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlenInput">defaultPrefixlenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuotaInput">defaultQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlenInput">maxPrefixlenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlenInput">minPrefixlenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeId">addressScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlen">defaultPrefixlen</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuota">defaultQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlen">maxPrefixlen</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlen">minPrefixlen</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.prefixes"></a>

```typescript
public readonly prefixes: string[];
```

- *Type:* string[]

---

##### `revisionNumber`<sup>Required</sup> <a name="revisionNumber" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.revisionNumber"></a>

```typescript
public readonly revisionNumber: number;
```

- *Type:* number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `addressScopeIdInput`<sup>Optional</sup> <a name="addressScopeIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeIdInput"></a>

```typescript
public readonly addressScopeIdInput: string;
```

- *Type:* string

---

##### `defaultPrefixlenInput`<sup>Optional</sup> <a name="defaultPrefixlenInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlenInput"></a>

```typescript
public readonly defaultPrefixlenInput: number;
```

- *Type:* number

---

##### `defaultQuotaInput`<sup>Optional</sup> <a name="defaultQuotaInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuotaInput"></a>

```typescript
public readonly defaultQuotaInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxPrefixlenInput`<sup>Optional</sup> <a name="maxPrefixlenInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlenInput"></a>

```typescript
public readonly maxPrefixlenInput: number;
```

- *Type:* number

---

##### `minPrefixlenInput`<sup>Optional</sup> <a name="minPrefixlenInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlenInput"></a>

```typescript
public readonly minPrefixlenInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `addressScopeId`<sup>Required</sup> <a name="addressScopeId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeId"></a>

```typescript
public readonly addressScopeId: string;
```

- *Type:* string

---

##### `defaultPrefixlen`<sup>Required</sup> <a name="defaultPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlen"></a>

```typescript
public readonly defaultPrefixlen: number;
```

- *Type:* number

---

##### `defaultQuota`<sup>Required</sup> <a name="defaultQuota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuota"></a>

```typescript
public readonly defaultQuota: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxPrefixlen`<sup>Required</sup> <a name="maxPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlen"></a>

```typescript
public readonly maxPrefixlen: number;
```

- *Type:* number

---

##### `minPrefixlen`<sup>Required</sup> <a name="minPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlen"></a>

```typescript
public readonly minPrefixlen: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetpoolV2Config <a name="DataOpenstackNetworkingSubnetpoolV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetpoolV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingSubnetpoolV2Config: dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.addressScopeId">addressScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultPrefixlen">defaultPrefixlen</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultQuota">defaultQuota</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.maxPrefixlen">maxPrefixlen</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.minPrefixlen">minPrefixlen</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressScopeId`<sup>Optional</sup> <a name="addressScopeId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.addressScopeId"></a>

```typescript
public readonly addressScopeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}.

---

##### `defaultPrefixlen`<sup>Optional</sup> <a name="defaultPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultPrefixlen"></a>

```typescript
public readonly defaultPrefixlen: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}.

---

##### `defaultQuota`<sup>Optional</sup> <a name="defaultQuota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultQuota"></a>

```typescript
public readonly defaultQuota: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}.

---

##### `maxPrefixlen`<sup>Optional</sup> <a name="maxPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.maxPrefixlen"></a>

```typescript
public readonly maxPrefixlen: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}.

---

##### `minPrefixlen`<sup>Optional</sup> <a name="minPrefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.minPrefixlen"></a>

```typescript
public readonly minPrefixlen: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}.

---



